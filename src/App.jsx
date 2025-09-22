import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Custom Components
import ScrollToTop from "./components/ScrollToTop";

// Page Components
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Solutions from "./pages/Solutions";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQs";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";
import Gallery from "./pages/Gallery";
import TaxCalculatorPage from "./pages/TaxCalculatorPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Disclaimer from "./pages/Disclaimer";
import IncomeTaxFiling from "./pages/IncomeTaxFiling";
import GSTRegistration from "./pages/registrations/GSTRegistration";
import CompanyFormation from "./pages/CompanyFormation";
import Bookkeeping from "./pages/Bookkeeping";
import TDSPayroll from "./pages/TDSPayroll";
import PartnershipFirmRegistration from "./pages/registrations/PartnershipFirmRegistration";
import ProprietorshipFirmRegistration from "./pages/registrations/ProprietorshipFirmRegistration";
import PrivateLimitedCompanyRegistration from "./pages/registrations/PrivateLimitedCompanyRegistration";
import SmallBusiness from "./pages/SmallBusiness";
import Startups from "./pages/Startups";
import SalariedIndividuals from "./pages/SalariedIndividuals";
import NRIs from "./pages/NRIs";
import NotFound from "./pages/NotFound";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";
import SubServiceDetailPage from "./pages/SubServiceDetailPage";
import LLPRegistration from "./pages/registrations/LLPRegistration";
import MSMERegistration from "./pages/registrations/MSMERegistration";
import IECRegistration from "./pages/registrations/IECRegistration";
import LabourLicense from "./pages/licenses/LabourLicense";
import TradeLicense from "./pages/licenses/TradeLicense";
import FactoryLicense from "./pages/licenses/FactoryLicense";
import FactoryPlanApproval from "./pages/licenses/FactoryPlanApproval";
import PollutionBoardApproval from "./pages/licenses/PollutionBoardApproval";
// import IncomeTaxScrutinyServices from "./pages/otherServices/IncomeTaxScrutinyServices";
// import GSTScrutinyServices from "./pages/otherServices/GSTScrutinyServices";
import AppealFilings from "./pages/otherServices/AppealFilings";
// import AccountingServices from "./pages/otherServices/AccountingServices";
// import BookKeepingServices from "./pages/otherServices/BookKeepingServices";
// import ConsultancyServices from "./pages/otherServices/ConsultancyServices";
// import FinancialAdvisoryServices from "./pages/otherServices/FinancialAdvisoryServices";
// import TaxPlanningServices from "./pages/otherServices/TaxPlanningServices";
// import ROCWorks from "./pages/otherServices/ROCWorks";
// import SharesTransfers from "./pages/otherServices/SharesTransfers";
// import SharesValuation from "./pages/otherServices/SharesValuation";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-grow w-full pt-16">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route
                  path="/services/:categoryName"
                  element={<ServiceCategoryPage />}
                />
                <Route
                  path="/services/:categoryName/:subServiceName"
                  element={<SubServiceDetailPage />}
                />
                <Route
                  path="/services/:serviceId"
                  element={<ServiceDetail />}
                />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book-appointment" element={<BookAppointment />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/tax-calculator" element={<TaxCalculatorPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route
                  path="/services/income-tax-filing"
                  element={<IncomeTaxFiling />}
                />
                <Route
                  path="/services/company-formation"
                  element={<CompanyFormation />}
                />
                <Route path="/services/bookkeeping" element={<Bookkeeping />} />
                <Route path="/services/tds-payroll" element={<TDSPayroll />} />
                <Route
                  path="/services/registrations/partnership-firm"
                  element={<PartnershipFirmRegistration />}
                />
                <Route
                  path="/services/registrations/gst-registration"
                  element={<GSTRegistration />}
                />
                <Route
                  path="/services/registrations/proprietorship-firm"
                  element={<ProprietorshipFirmRegistration />}
                />
                <Route
                  path="/services/registrations/company-incorporation"
                  element={<PrivateLimitedCompanyRegistration />}
                />
                <Route
                  path="/services/registrations/llp-registration"
                  element={<LLPRegistration />}
                />
                <Route
                  path="/services/gst-registration"
                  element={<GSTRegistration />}
                />
                <Route
                  path="/services/registrations/msme-udyam"
                  element={<MSMERegistration />}
                />
                <Route
                  path="/services/registrations/iec-code"
                  element={<IECRegistration />}
                />
                <Route
                  path="/services/licenses/labour-license"
                  element={<LabourLicense />}
                />
                <Route
                  path="/services/licenses/trade-license"
                  element={<TradeLicense />}
                />
                <Route
                  path="/services/licenses/factory-license"
                  element={<FactoryLicense />}
                />
                <Route
                  path="/services/licenses/factory-plan-approval"
                  element={<FactoryPlanApproval />}
                />
                <Route
                  path="/services/licenses/pollution-board-approval"
                  element={<PollutionBoardApproval />}
                />
                <Route
                  path="/solutions/small-business"
                  element={<SmallBusiness />}
                />
                <Route path="/solutions/startups" element={<Startups />} />
                <Route
                  path="/solutions/salaried"
                  element={<SalariedIndividuals />}
                />
                <Route path="/solutions/nris" element={<NRIs />} />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/services/other/income-tax-scrutiny"
                  element={<IncomeTaxScrutinyServices />}
                />
                <Route
                  path="/services/other/gst-scrutiny"
                  element={<GSTScrutinyServices />}
                />
                <Route
                  path="/services/other/appeal-filings"
                  element={<AppealFilings />}
                />
                <Route
                  path="/services/other/accounting-services"
                  element={<AccountingServices />}
                />
                <Route
                  path="/services/other/book-keeping-services"
                  element={<BookKeepingServices />}
                />
                <Route
                  path="/services/other/consultancy-services"
                  element={<ConsultancyServices />}
                />
                <Route
                  path="/services/other/financial-advisory-services"
                  element={<FinancialAdvisoryServices />}
                />
                <Route
                  path="/services/other/tax-planning-services"
                  element={<TaxPlanningServices />}
                />
                <Route
                  path="/services/other/roc-works"
                  element={<ROCWorks />}
                />
                <Route
                  path="/services/other/shares-transfers"
                  element={<SharesTransfers />}
                />
                <Route
                  path="/services/other/shares-valuation"
                  element={<SharesValuation />}
                />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
