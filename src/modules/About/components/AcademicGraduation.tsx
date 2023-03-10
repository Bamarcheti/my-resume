import Card from '../../../components/Card';
import Subtitle from '../../../components/Title/Subtitle';

const AcademicGraduation = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle="Academic Graduation / Title" />
      </div>
      <div className="flex flex-col sm:pt-4 pt-0">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 xl:gap-16 lg:gap-14 justify-center">
          <Card
            title="Insted / Graduation"
            period="FEBRUARY OF 2021 - JULY OF 2023"
            description="Systems Analysis and Development Technology (TADS)"
          />
          <Card
            title="Colégio Nova escola / High School"
            period="FEBRUARY OF 2018 - DECEMBER OF 2020"
            description="High School"
          />
        </div>
      </div>
    </div>
  );
};

export default AcademicGraduation;
