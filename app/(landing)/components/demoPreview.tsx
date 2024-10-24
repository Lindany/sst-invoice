import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "Inkundla Farming",
    companyAddress: "1600 Amphitheatre Parkway",
    companyCity: "Mountain View",
    companyState: "CA",
    companyCountry: "South Africa",
    companyLogo: "/android-chrome-192x192.png",
    companyTaxId: "",
    companyZip: "94043",
    email: "support@inkundla.co.za",
  },
  yourDetails: {
    yourName: "O. Daniso",
    yourAddress: "12345 Centurion City, Centurion, Pretoria",
    yourCity: "Bengaluru",
    yourState: "Karnataka",
    yourCountry: "Gauteng",
    yourLogo: "/pranav.png",
    yourEmail: "hi@sstgroupholding.co.za",
    yourTaxId: "",
    yourZip: "1632",
  },
  paymentDetails: {
    bankName: "FNB",
    accountNumber: "1234567890",
    accountName: "Current",
    routingCode: "123456",
    swiftCode: "AXISINBB1234",
    ifscCode: "UTIB0000000",
    currency: "ZAR",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #25",
    issueDate: "Fri Apr 19 2024 00:00:00 GMT+0530 (India Standard Time)",
    dueDate: "Mon Apr 22 2024 00:00:00 GMT+0530 (India Standard Time)",
  },
  invoiceDetails: {
    note: "Services Period  21/03/2024 to 20/04/2024",
    discount: "22000",
    taxRate: "18",
    items: [
      {
        itemDescription: "Sheep",
        amount: 3500,
        qty: 5,
      },
      {
        itemDescription: "Goat",
        amount: 2900,
        qty: 10,
      },
    ],
    currency: "ZAR",
  },
};
export default DemoPreview;
