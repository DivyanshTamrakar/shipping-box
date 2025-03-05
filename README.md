# 🚀 Shipping Cost Calculator

A Next.js application for calculating shipping costs based on destination multipliers. Users can add box details (receiver name, weight, color, and destination) and view stored shipping records in a table.

## 📌 Features

- ✅ **Form for adding shipping details:** Intuitive form for easy data entry.
- ✅ **Table to display stored records:** Clear and concise table view of all shipping records.
- ✅ **Validation for required fields:** Ensures data integrity by validating input fields.
- ✅ **Negative weight resets to zero with an error message:** Prevents invalid weight entries.
- ✅ **Local storage for data persistence:** Stores data locally for seamless user experience.
- ✅ **Environment variable configuration for cost multipliers:** Easy management of shipping cost multipliers.
- ✅ **Fully responsive design:** Adapts to various screen sizes for optimal viewing.
- ✅ **Next.js App Router structure:** Modern and efficient routing.

## 🛠 Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/DivyanshTamrakar/shipping-box.git
   cd shipping-cost-calculator

2. **Install Dependencies**

   ```bash
   npm install
3. **Configure Environment Variables**
   Create a .env.local file in the root folder.
   Add the following values:
   ```bash
    NEXT_PUBLIC_SWEDEN_MULTIPLIER=7.35
    NEXT_PUBLIC_CHINA_MULTIPLIER=11.53
    NEXT_PUBLIC_BRAZIL_MULTIPLIER=15.63
    NEXT_PUBLIC_AUSTRALIA_MULTIPLIER=50.09
   
4. **Run the Development Server**
   ```bash
   npm run dev
   
5. **🚀 Deployment**
```bash
Deployed app link: https://shipping-box-theta.vercel.app/




