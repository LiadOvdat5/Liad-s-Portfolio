import WorkItem from "./WorkItem";


const data = [
    {
      year: "2023",
      title: "English and Hebrew Teacher",
      company: "NewSchool, TLV",
      duration: "1 year and 2 months",
      details: "English and Hebrew language teacher. Responsibilities include lesson planning, delivery, and assessment. Developed engaging curriculum and fostered a positive learning environment for students of various ages and skill levels."
    },
    {
      year: "2019",
      title: "Private Teacher",
      company: "Independent, Israel",
      duration: "4 years and 2 months (ongoing)",
      details: "Provided personalized instruction in math, science, English, computer science, and physics to students of diverse backgrounds and learning needs. Designed effective lesson plans, tailored learning approaches, and monitored student progress."
    },
    {
      year: "July 2022",
      title: "Lecturer",
      company: "John Bryce, Israel",
      duration: "2 months",
      details: "Delivered financial management lectures in English to students in various schools. Prepared engaging presentations, facilitated discussions, and ensured comprehension of complex financial concepts."
    }
  ];


const Work = () => {



  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {
        data.map((item, idx) => (
          <WorkItem 
          key={idx} 
          year={item.year} 
          title={item.title} 
          duration={item.duration}
          details={item.details} 
          />
        ))
      }
    </div>
  );
};

export default Work;
