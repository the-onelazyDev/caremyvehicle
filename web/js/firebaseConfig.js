// Care My Vehicle - Centralized Firebase & Firestore Configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  serverTimestamp,
  onSnapshot
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

export const firebaseConfig = {
  apiKey: "AIzaSyBnxdBu82IPZ4CfzxWY7qQCKzo8fB2hiXo",
  authDomain: "care-my-vehicle-9324e.firebaseapp.com",
  projectId: "care-my-vehicle-9324e",
  storageBucket: "care-my-vehicle-9324e.firebasestorage.app",
  messagingSenderId: "110491038018",
  appId: "1:110491038018:web:9ec35bf238a8e39fc658db",
  measurementId: "G-20S31WLJMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/**
 * Save a new customer inquiry / buyer lead directly into Firebase Firestore
 * @param {Object} leadData
 * @returns {Promise<string>} docId
 */
export async function saveCustomerLead(leadData) {
  try {
    const leadsCollection = collection(db, 'cmv_customer_leads');
    const docRef = await addDoc(leadsCollection, {
      ...leadData,
      createdAt: serverTimestamp(),
      clientTimestamp: new Date().toISOString(),
      status: leadData.otpVerified ? 'VERIFIED_OTP' : 'NEW',
      notes: ''
    });
    return docRef.id;
  } catch (error) {
    console.error('Firestore saveCustomerLead error:', error);
    // Graceful offline fallback
    saveLeadLocallyFallback(leadData);
    throw error;
  }
}

/**
 * Real-time listener for buyer leads in Admin Panel
 * @param {Function} callback
 * @returns {Function} unsubscribe function
 */
export function subscribeToLeads(callback) {
  try {
    const leadsCollection = collection(db, 'cmv_customer_leads');
    const q = query(leadsCollection, orderBy('createdAt', 'desc'));
    return onSnapshot(q, (snapshot) => {
      const leads = [];
      snapshot.forEach((doc) => {
        leads.push({ id: doc.id, ...doc.data() });
      });
      callback(leads);
    }, (err) => {
      console.warn('Firestore subscription fallback:', err);
      // Fallback to local
      callback(getFallbackLocalLeads());
    });
  } catch (err) {
    console.warn('Firestore subscribe error, using local fallback:', err);
    callback(getFallbackLocalLeads());
    return () => {};
  }
}

/**
 * Update lead status (e.g. NEW -> CONTACTED -> CONVERTED)
 */
export async function updateLeadStatus(leadId, status, notes = '') {
  try {
    const docRef = doc(db, 'cmv_customer_leads', leadId);
    await updateDoc(docRef, { status, notes, updatedAt: serverTimestamp() });
  } catch (err) {
    console.error('Update lead status error:', err);
  }
}

/**
 * Delete a lead
 */
export async function deleteCustomerLead(leadId) {
  try {
    const docRef = doc(db, 'cmv_customer_leads', leadId);
    await deleteDoc(docRef);
  } catch (err) {
    console.error('Delete customer lead error:', err);
  }
}

function saveLeadLocallyFallback(lead) {
  try {
    const existing = JSON.parse(localStorage.getItem('cmv_backup_leads') || '[]');
    existing.unshift({
      id: 'local_' + Date.now(),
      ...lead,
      clientTimestamp: new Date().toISOString(),
      status: 'NEW (Local)'
    });
    localStorage.setItem('cmv_backup_leads', JSON.stringify(existing));
  } catch (e) {}
}

function getFallbackLocalLeads() {
  try {
    return JSON.parse(localStorage.getItem('cmv_backup_leads') || '[]');
  } catch (e) {
    return [];
  }
}

