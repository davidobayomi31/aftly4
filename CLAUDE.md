@AGENTS.md
# Project State: Marina App

## Developer Guidelines
- **CRITICAL:** Do NOT automatically write or rewrite code blocks for me. I am building this to learn. 
- **Your Role:** Check my work, point out bugs by line number, explain structural logic, and give me guidance so I can type and insert the code myself.

## Current Project Stack & Architecture
- **Framework:** React Native / Expo (`App.js` is the main entry point).
- **Navigation:** Using `@react-navigation/bottom-tabs` (`const Tab = createBottomTabNavigator()`).
- **In-App Database:** Local array of objects called `marinas` placed right above the `HomeScreen` component. Containing fields like: `id`, `name`, `lake`, `address`, `phone`, `lat`, `lng`, amenities (booleans), and `priceRange`.

## UI Implementation Status

### 1. Header & State
- The header is updated and dynamically wired to state. It properly displays `Blue Beacon Marina` with a dropdown arrow indicator.

### 2. Dropdown Picker Logic (`App.js`)
We mapped out a conditional block `{showPicker && (...)}` that loops through the `marinas` data array using standard `TouchableOpacity` selectors to update `setSelectedMarina(marina)` and toggle `showPicker(false)`.

**Recent Bug Fixes Checked:**
- Line 76: Ensured curly bracket opens properly before `showPicker && (`.
- Line 84: Corrected `fasle` typo to `false`.
- Line 86: Corrected `style.pickerText` typo to `styles.pickerText`.

---

## Next Immediate Task: Dropdown UI Redesign
The current vertical dropdown list needs to be completely restructured to match a premium layout:
1. **Size & Style:** Make the dropdown element larger and container style an actual sleek gray background.
2. **Direction:** Change the orientation from a traditional **top-to-bottom vertical list** to a clean **left-to-right horizontal selection bar**.
3. **Amenities:** Display amenity badges (Gas, Pump-Out, Hydro, Mechanic) inside small, colored pill/capsule shapes on the cards.

---

## Reference Materials & Long-Term App Plan
*Note: The complete, high-level business plan and structural breakdown for this app were fully established in the previous long-form chat session titled **"Boating app business plan feedback"**.*

### Core Modules to Build Next:
1. **Interactive Mapping & Live Routing:** Users can click a "Get Directions" button from a marina card. The app needs to check whether they are driving or walking, pull their live GPS location, and render a highlighted path on the map along with step-by-step navigation directions.
2. **Simcoe County Database Expansion:** The app will eventually parse a full `.csv` data file containing cards, locations, and unique details for all marinas located throughout the Simcoe County area.
3. **Amenity Filtering System:** A search and filter system that lets users toggle specific criteria (like Gas, Pump-Out, Hydro, or Mechanic) to instantly isolate matching marinas on the map pins and card list.

