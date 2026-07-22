import DashboardLayout from "@/components/dashboardlayout"
import { useState } from "react"

const tabs = [
  "Hotel Info",
  "Booking",
  "Notifications",
  "Payments",
  "Staff & Access",
  "Appearance",
]

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Hotel Info")

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-white text-2xl">Settings</h1>
          <p className="text-gray-400 text-sm">Manage your hotel configuration</p>
        </div>
        <button className="bg-slider text-[#0A0806] text-xs rounded-md font-medium cursor-pointer uppercase px-5 py-2 hover:bg-[#9A7730] hover:text-white transition-colors">
          Save Changes
        </button>
      </div>

      {/* Tab navigation */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 text-xs cursor-pointer transition-colors
              ${activeTab === tab
                ? "bg-slider/10 border border-slider/40 text-slider"
                : "bg-[#12100D] border border-primary text-gray-400 hover:text-gray-300 hover:border-gray-400/50"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Hotel Info */}
      {activeTab === "Hotel Info" && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#12100D] border border-primary p-6 flex flex-col gap-4">
            <h2 className="text-white font-serif text-lg">Hotel Information</h2>
            {[
              { label: "Hotel Name",   value: "Aurum Hotel" },
              { label: "Address",      value: "14 Ozumba Mbadiwe Avenue" },
              { label: "City",         value: "Victoria Island, Lagos" },
              { label: "Phone",        value: "+234 (0) 123 4567" },
              { label: "Email",        value: "hello@aurum.ng" },
              { label: "Website",      value: "www.aurum.ng" },
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-1">
                <label className="text-[9px] tracking-widest uppercase text-[#6A6358]">
                  {field.label}
                </label>
                <input
                  defaultValue={field.value}
                  className="bg-[#1C1914] border border-primary text-white text-sm px-3 py-2 outline-none transition-colors"
                />
              </div>
            ))}
          </div>

          <div className="bg-[#12100D] border border-primary p-6 flex flex-col gap-4">
            <h2 className="text-white font-serif text-lg">Check-in & Check-out</h2>
            {[
              { label: "Check-in Time",         value: "2:00 PM" },
              { label: "Check-out Time",         value: "12:00 PM" },
              { label: "Late Checkout Fee",      value: "₦15,000" },
              { label: "Early Check-in Fee",     value: "₦10,000" },
              { label: "Star Rating",            value: "5" },
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-1">
                <label className="text-[9px] tracking-widest uppercase text-[#6A6358]">
                  {field.label}
                </label>
                <input
                  defaultValue={field.value}
                  className="bg-[#1C1914] border border-primary text-white text-sm px-3 py-2 outline-none transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Booking */}
      {activeTab === "Booking" && (
        <div className="bg-[#12100D] border border-primary p-6 flex flex-col gap-4 max-w-xl">
          <h2 className="text-white font-serif text-lg">Booking Settings</h2>
          {[
            { label: "Minimum Stay (nights)",  value: "1" },
            { label: "Maximum Stay (nights)",  value: "30" },
            { label: "VAT Rate",               value: "7.5%" },
            { label: "Currency",               value: "NGN" },
            { label: "Cancellation Policy",    value: "48 hours free cancellation" },
            { label: "Deposit Required (%)",   value: "30" },
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-1">
              <label className="text-[9px] tracking-widest uppercase text-[#6A6358]">
                {field.label}
              </label>
              <input
                defaultValue={field.value}
                className="bg-[#1C1914] border border-primary text-white text-sm px-3 py-2 outline-none  transition-colors"
              />
            </div>
          ))}
        </div>
      )}

      {/* Notifications */}
      {activeTab === "Notifications" && (
        <div className="bg-[#12100D] border border-primary p-6 max-w-xl">
          <h2 className="text-white font-serif text-lg mb-6">Notification Preferences</h2>
          <div className="flex flex-col gap-0">
            {[
              "Email alert for new bookings",
              "Email alert for cancellations",
              "Email alert for payments received",
              "SMS alerts for staff assignments",
              "Daily summary report email",
              "Overdue payment alerts",
              "Guest check-in reminders",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between py-4 border-b border-white/4"
              >
                <span className="text-sm text-gray-300">{item}</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 accent-slider cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Payments */}
      {activeTab === "Payments" && (
        <div className="bg-[#12100D] border border-primary p-6 flex flex-col gap-4 max-w-xl">
          <h2 className="text-white font-serif text-lg">Payment Settings</h2>
          {[
            { label: "Payment Gateway",     value: "Paystack" },
            { label: "Paystack Public Key", value: "pk_live_xxxxxxxxxxxx" },
            { label: "Paystack Secret Key", value: "sk_live_xxxxxxxxxxxx" },
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-1">
              <label className="text-[9px] tracking-widest uppercase text-[#6A6358]">
                {field.label}
              </label>
              <input
                defaultValue={field.value}
                className="bg-[#1C1914] border border-primary text-white text-sm px-3 py-2 outline-none transition-colors"
              />
            </div>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <p className="text-[9px] tracking-widest uppercase text-[#6A6358]">
              Accepted Payment Methods
            </p>
            {["Card", "Bank Transfer", "USSD", "Cash"].map((method) => (
              <div key={method} className="flex items-center justify-between py-3 border-b border-white/4">
                <span className="text-sm text-gray-300">{method}</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 accent-slider cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Staff & Access */}
      {activeTab === "Staff & Access" && (
        <div className="bg-[#12100D] border border-primary p-6 max-w-xl">
          <h2 className="text-white font-serif text-lg mb-6">Roles & Permissions</h2>
          <div className="flex flex-col gap-0">
            {[
              { role: "Admin",        desc: "Full access to all sections" },
              { role: "Manager",      desc: "Access to all except settings" },
              { role: "Front Desk",   desc: "Reservations and guests only" },
              { role: "Housekeeping", desc: "Housekeeping and tasks only" },
              { role: "Maintenance",  desc: "Tasks and rooms only" },
            ].map((item) => (
              <div
                key={item.role}
                className="flex items-center justify-between py-4 border-b border-white/4"
              >
                <div>
                  <p className="text-sm text-white">{item.role}</p>
                  <p className="text-xs text-[#6A6358] mt-1">{item.desc}</p>
                </div>
                <button className="text-xs border border-primary text-gray-400 cursor-pointer px-3 py-1 hover:border-slider/40 hover:text-slider transition-colors">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Appearance */}
      {activeTab === "Appearance" && (
        <div className="bg-[#12100D] border border-primary p-6 flex flex-col gap-4 max-w-xl">
          <h2 className="text-white font-serif text-lg">Appearance</h2>
          {[
            { label: "Date Format",  value: "DD/MM/YYYY" },
            { label: "Time Format",  value: "12 Hour" },
            { label: "Language",     value: "English" },
            { label: "Brand Color",  value: "#C9A84C" },
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-1">
              <label className="text-[9px] tracking-widest uppercase text-[#6A6358]">
                {field.label}
              </label>
              <input
                defaultValue={field.value}
                className="bg-[#1C1914] border border-primary text-white text-sm px-3 py-2 outline-none transition-colors"
              />
            </div>
          ))}
        </div>
      )}

    </DashboardLayout>
  )
}