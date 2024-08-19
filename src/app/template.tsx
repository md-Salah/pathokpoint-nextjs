import { Footer, Navbar, TopBanner } from '@/components';
import { ReduxProvider } from '@/redux/provider';

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <TopBanner />
      <Navbar />
      {children}
      <Footer />
    </ReduxProvider>
  );
};

export default Template;
