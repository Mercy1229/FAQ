import FaQ from './components/faq';
import star from  "./assets/images/icon-star.svg";

function App() {
  const faqData=[
    {
      id:1,
      question:"What is frontend mentor and how ti is works?",
      answer:"Frontend Mentor is a platform that helps developers improve their front-end coding skills through challenges, resources, and feedback."
    },
    {
      id:2,
      question:"Is frontend mentor is free?",
      answer:"Yes, the majority of challenges on Frontend Mentor are free, but some are premium and require a Pro subscription. You can tell if a challenge is free or premium on each challenge page."
    },
    {
      id:3,
      question:"Can I use frontend mentor projects in my portfolio?",
      answer:"Yes, you can use projects you build on Frontend Mentor in your portfolio. Frontend Mentor is a website that offers coding challenges to help you improve your front-end skills. ",
    },
    {
      id:4,
      question:"How can I get help if i am stuck on a challenge",
      answer:"You don't have to tackle challenges alone. Seeking guidance from others who have expertise or experience in the area can be immensely helpful.",
    }
  ];
  return (
    <div>
      <div className='lg:bg-home_desk sm:bg-home_mob mv:bg-home_mob md:bg-home_mob lg:h-52 md:h-52 sm:h-60 mv:h-60 relative'>
			<div className="bg-white border rounded-lg p-4 leading-10 absolute lg:translate-y-28 mv:translate-y-36 md:translate-y-28 sm:translate-y-36 mv:p-5 transform lg:translate-x-full md:translate-x-full sm:translate-x-28  mv:translate-x-4 lg:w-2/6 shadow-lg">
				<div className="flex flex-row space-x-2 mb-5">
					<img src={star} className="h-8 my-auto" />
					<h1 className="text-purple-950 font-worksans font-extrabold text-4xl my-auto">FAQs</h1>
				</div>
				{faqData.map((data)=>(
					<FaQ question={data.question} answer={data.answer} />)
				)}
			</div>
      </div>
    </div>
    
  );
}

export default App;
