import Traffic from './components/traffic';
import Sponsor from './components/sponsoredads';
import Solution from './components/solutions';
import Mail from './components/mail';
import Getting from './components/getting';
import Faq from './components/faq';
export default function Home() {
  return (
    <>
      
      
      <div className="min-h-screen bg-white">
        <Traffic />
        <Sponsor />
        <Solution />
        <Getting />
        <Mail />
        <Faq />
        
      </div>
    </>
  );
}