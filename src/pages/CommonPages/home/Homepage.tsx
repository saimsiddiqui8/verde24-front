import { Link } from "react-router-dom";
import doctorsImg from "../../../assets/doctors.png";
import whiteLogoImg from "../../../assets/whiteLogo.png";
// import syringeImg from "../../../assets/syringe.png";
// import pillImg from "../../../assets/pill.png";
import cardImg1 from "../../../assets/homeCards/card1.png";
import cardImg2 from "../../../assets/homeCards/card2.png";
import cardImg3 from "../../../assets/homeCards/card3.png";
import cardImg4 from "../../../assets/homeCards/card4.png";
import cardImg5 from "../../../assets/homeCards/card5.png";
import consultImg1 from "../../../assets/consult/Uterus.png";
import consultImg2 from "../../../assets/consult/CamoCream.png";
import consultImg3 from "../../../assets/consult/Male.png";
import consultImg4 from "../../../assets/consult/Baby.png";
import consultImg5 from "../../../assets/consult/Psychotherapy.png";
import consultImg6 from "../../../assets/consult/Coughing.png";
import appImg1 from "../../../assets/appointment/image1.png";
import appImg2 from "../../../assets/appointment/image2.png";
import appImg3 from "../../../assets/appointment/image3.png";
import appImg4 from "../../../assets/appointment/image4.png";
import appImg5 from "../../../assets/appointment/image5.png";
import appImg6 from "../../../assets/appointment/image6.png";
import verdeAppImg1 from "../../../assets/verdeApp/image1.png";
import verdeAppImg2 from "../../../assets/verdeApp/image2.png";
import {
  Button,
  Footer,
  GooglePlayButton,
  InputField,
} from "../../../components";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import DropdownField from "../../../components/DropdownField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const cards = [
  {
    title: "Video Consultation",
    img: cardImg1,
  },
  {
    title: "Online Appointment",
    img: cardImg2,
  },
  {
    title: "Pharmacy At Doorstep",
    img: cardImg3,
  },
  {
    title: "Lab Facilities",
    img: cardImg4,
  },
  {
    title: "Surgeries Made Easy",
    img: cardImg5,
  },
];

const appointment2 = [
  {
    img: appImg5,
    title: "Dietitian/Nutrition",
    desc: "Get guidance on eating right, weight management and sports nutrition",
  },
  {
    img: appImg6,
    title: "Physiotherapist",
    desc: "Pulled a muscle? Get it treated by a trained physiotherapist",
  },
];

const consult = [
  { img: consultImg1, title: "Pregnancy Care " },
  { img: consultImg2, title: "Acne, pimple or skin issues" },
  { img: consultImg3, title: "Performance issues in bed" },
  { img: consultImg4, title: "Cold, cough or fever" },
  { img: consultImg5, title: "Child not feeling well " },
  { img: consultImg6, title: "Depression or anxiety" },
];

const appointment = [
  {
    img: appImg1,
    title: "Dentist",
  },
  {
    img: appImg2,
    title: "Gynecologist/Obstetrician",
  },
  {
    img: appImg3,
    title: "Dietitian/Nutrition",
  },
  {
    img: appImg4,
    title: "Physiotherapist",
  },
];


const FormSchema = z.object({
  location: z.string().min(1, { message: "Location is required" }),
  search: z.string().min(1, { message: "Search is required" }),
});

export default function Homepage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(FormSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-8 flex flex-col sm:flex-row gap-2 sm:gap-4 px-8 items-center">
          <div className="w-11/12 sm:w-48">
            <InputField
              label="Location"
              placeholder="Nigeria"
              properties={{ ...register("location") }}
              error={errors["location"]}
            />
          </div>
          <div className="w-11/12 sm:w-80">
            <DropdownField
              label=""
              name="search"
              placeholder="Search by doctors, Clinic & hospitals, etc"
              options={[{ label: "One", value: "1" }]}
              properties={{ ...register("search") }}
              error={errors["search"]}
            />
          </div>
          <Link to="/patient/sign-in">
            <Button title="Search" className="w-22" />
          </Link>
          <Link to="/lab/sign-in">
            <Button title="Lab Login" className="w-22" />
          </Link>
          <Link to="/pharmacy/sign-in">
            <Button title="Pharmacy Login" className="w-22" />
          </Link>
        </div>
      </form>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),linear-gradient(272.02deg, #3FB98F 19.91%, #125DB9 78.47%)",
        }}
        className="relative flex flex-col sm:flex-row items-center bg-gradient-to-br to-[#3FB98F] from-[#125DB9] bg-opacity-20 w-[95%] sm:w-[99%] mx-auto my-8 py-8 sm:px-8 md:px-16 lg:px-32 rounded-xl"
      >
        <div className="w-full sm:w-7/12 sm:px-0">
          <div className="flex justify-center sm:justify-start gap-2">
            <img src={whiteLogoImg} alt="" className="w-16" />
            <h5 className="text-white">Transform</h5>
          </div>
          <h2 className="text-2xl font-semibold text-center sm:text-start text-white mt-1">
          Prepare for the Health Revolution:
          </h2>
          <h2 className="text-2xl font-semibold text-center sm:text-start text-white mt-1">
          Verde24health Launching Soon!
          </h2>
          <div className="w-40 mx-auto sm:mx-0">
            <Link to="/patient/sign-up">
              <Button title="Sign-up today" className="mt-4" />
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-5/12">
          <img src={doctorsImg} alt="" className="w-full" />
        </div>
        <div className="absolute bottom-0 right-0 bg-white p-2 rounded-tl-lg">
          <p>
            Based on medically proven research | Personalized care from medical
            team
          </p>
        </div>
      </div>
      <div className="flex justify-evenly flex-wrap my-12">
        {cards?.map((card, index) => (
          <div key={index} className="w-56 rounded-2xl shadow-xl text-primary">
            <div className="h-[70%] overflow-clip relative">
              <img src={card?.img} alt="" className="w-full object-cover" />
            </div>
            <div className="h-[20%] flex flex-col items-center gap-2 justify-center p-2">
              <h4 className="text-lg text-center">{card?.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 px-8">
        <h2 className="text-2xl font-semibold">
        Access Premier Online Consultations with Leading Healthcare
        </h2>
        <h2 className="text-2xl font-semibold">
        Professionals for All Your Health Needs
        </h2>
        <p className="text-base">
          Secure Online Consultations: Trusted Doctors in Every Specialty.
        </p>
      </div>
      <div className="flex justify-evenly flex-wrap my-4">
        {consult?.map((card,index) => (
          <div key={index}  className="w-40 text-primary">
            <div className="overflow-clip relative">
              <img src={card?.img} alt="" className="w-full object-cover" />
            </div>
            <div className="flex flex-col items-center gap-2 justify-center p-2">
              <h4 className="text-lg text-center">{card?.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="my-12 px-8">
        <h2 className="text-2xl font-semibold">
        Schedule an appointment for an in-person consultation.
        </h2>
        <p className="text-base">
        Discover skilled doctors in every specialty.
        </p>
      </div>
      <div className="flex justify-evenly flex-wrap my-8">
        {appointment?.map((card ,index) => (
          <div key={index} className="w-72 text-primary">
            <div className="overflow-clip relative">
              <img src={card?.img} alt="" className="w-full object-cover" />
            </div>
            <div className="flex flex-col items-center gap-2 justify-center p-2">
              <h4 className="text-lg text-center">{card?.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="w-5/6 h-[1px] bg-primary mx-auto my-8"></div>
      <div className="flex justify-center items-center gap-4 flex-wrap my-8 px-8">
        <div className="w-80 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">
            Read top articles from health experts
          </h2>
          <p className="text-base">
            Health articles that keep you informed about good health practices
            and achieve your goals.
          </p>
          <div className="w-44 mx-auto sm:mx-0">
            <Button title="See all Articles" />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
          {appointment2?.map((card,index) => (
            <div key={index}  className="w-72 text-primary">
              <div className="overflow-clip relative">
                <img src={card?.img} alt="" className="w-full object-cover" />
              </div>
              <div className="flex flex-col items-center gap-2 justify-center p-2">
                <h4 className="text-lg text-center">{card?.title}</h4>
                <p className="text-lg text-center md:text-start">{card?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-5/6 h-[1px] bg-primary mx-auto my-8"></div>
      <div className="flex flex-col items-center justify-center gap-4 my-12 w-4/5 sm:w-1/2 md:w-1/4 mx-auto">
        <h2 className="text-2xl font-semibold text-center">
        User testimonials
        </h2>
        <p className="text-base text-center">
        Verde24 has been a game-changer for me. Easy to use, helpful reviews, and teleconsultation feature are lifesavers. Highly recommend!
        </p>
        <Button title="Learn more" className="text-sm w-28" />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-12 px-4 sm:px-8">
        <div className="w-72 relative">
          <img src={verdeAppImg1} alt="" className="w-44" />
          <img
            src={verdeAppImg2}
            alt=""
            className="absolute w-28 top-1/2 right-1/4 transform -translate-y-1/2"
          />
        </div>
        <div className="w-11/12 sm:w-80 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold ">
            Download the Verde app
          </h2>
          <p className="text-sm ">
            Access video consultation with United State’s top doctors on the
            Verde app. Connect with doctors online, available 24/7, from the
            comfort of your home
          </p>
          <p className="text-base ">
            Get the link to download the app
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <InputField label="Email" placeholder="Enter Email" />
            <Button title="Send Email" className="text-sm w-28" />
          </div>
          <div className="flex flex-col items-center sm:flex-row gap-2">
            <GooglePlayButton icon={<FaGooglePlay size={25} fill="white" />} />
            <GooglePlayButton icon={<FaApple size={25} fill="white" />} />
            {/* <Button title="See all Articles" /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
