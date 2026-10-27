# Care My Vehicle — Operational Instructions & Development Rules

## 1. Mandatory Post-Import Live Verification
After importing/onboarding every new car into `js/carData.js` and `web/js/carData.js`:
1. **Live Browser Verification is Mandatory**:
   - Always run the browser agent to navigate to `https://www.caremyvehicle.in/?car=<car-id>`.
   - Verify that the car modal opens automatically.
2. **Inspect 360° Studio & Visuals**:
   - Verify the 360-degree turntable loads cleanly on a pure white background (`#FFFFFF`) with natural contact shadow.
   - Verify that hero frame 1 is in front 3/4 hero stance.
   - Test color switching by clicking different paint swatches and verifying smooth texture/color replacement.
   - Test rotation by dragging/swiping the 360° turntable.
3. **Inspect Car Details & Gallery**:
   - Verify car title, tagline, price range, specs, and dimensions.
   - Verify that all gallery images load in high-definition without broken links or distortion.
   - Verify variant matrix, pricing, and on-road calculator.
4. **Capture Screenshot**:
   - Take a screenshot of the open modal with the 360° viewer to verify aesthetic excellence before concluding the task.

---

## 2. Car Onboarding Standard Rules
- **₹0 Operational Cost**: All assets hosted on ImageKit free tier (`/cars/<car-id>/`).
- **Canvas Aspect Ratio & Clean Backgrounds**: Pure `#FFFFFF` studio background with natural ground contact shadow and zero distortion.
- **Strict Parity**: Always maintain 100% strict mirroring across `js/carData.js` and `web/js/carData.js`.
