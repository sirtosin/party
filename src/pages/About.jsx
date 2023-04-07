import React,{memo} from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const  About = memo(() => {
  const data = [
    {
      id: 1,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/06/Barrister-Julius-Abure-National-Chairman-267x352.jpg",
      name: "Barr. Julius Abure",
      tilte: "National Chairman",
    },
    {
      id: 2,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/06/Hon.-Umar-Faruk-Ibrahim-267x352.jpeg",
      name: "Hon. Umar Faruk Ibrahim",
      tilte: "National Secretary",
    },
    {
      id: 3,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/06/Clement-Ojukwu-267x352.jpeg",
      name: "Chief Clement Ojukwu",
      tilte: "National Organizing Secretar",
    },
    {
      id: 4,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/06/Oluchukwu-Oparah-267x352.jpeg",
      name: "Mrs Oluchi Opara",
      tilte: "National Treasurer",
    },
    {
      id: 5,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/06/Barr.-Oyelekan-Akingbade-267x352.jpeg",
      name: "Barr. Oyelekan Akingbade",
      tilte: "National Legal Adviser",
    },
    {
      id: 6,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/06/Comrade-Alhaji-Lamidi-Basiru-Apapa-267x352.jpeg",
      name: "Alh. Basiru Lamidi Apapa",
      tilte: "Deputy National Chairman",
    },
    {
      id: 7,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/06/Innocent-Sunday-Okeke-Agumba-267x352.jpeg",
      name: "Comr. Innocent Sunday Okeke",
      tilte: "National Vice Chairman South East",
    },
    {
      id: 8,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/08/kennedy-chigozie-ahanotu-267x352.jpg",
      name: "Hon. (Prince) Kennedy Chigozie Ahanotu",
      tilte: "Deputy National Secretary / Acting National Youth Leader",
    },
    {
      id: 9,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/06/Comrade-Gbenga-Daramola-267x352.jpeg",
      name: "Comr. Gbenga Daramola",
      tilte: "National Financial Secretary",
    },
    {
      id: 10,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/06/Prince-Favour-Reuben-National-Vice-Chairman-South-South-267x352.jpeg",
      name: "Prince Favour Reuben",
      tilte: "National Vice Chairman South South",
    },
    {
      id: 11,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/06/Muhammad-Alkali-Ibrahim-267x352.jpeg",
      name: "Muhammad Alkali Ibrahim",
      tilte: "National Vice Chairman North East",
    },
    {
      id: 12,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/06/Alhaji-Saleh-Lawan-267x352.jpeg",
      name: "Alhaji Saleh Lawan",
      tilte: "Deputy National Secretary 2",
    },
    {
      id: 13,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/08/dudu-mamman-manuga-1-267x352.jpeg",
      name: "Dudu Mamman Manuga",
      tilte: "National Women Leader",
    },
    {
      id: 14,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/09/alh-umar-mohammed-267x352.jpg",
      name: "Alh. Umar Muhammed",
      tilte: "National Vice Cairman North West",
    },
    {
      id: 15,
      img: "https://labourparty.com.ng/wp-content/uploads/2022/12/chief-daniel-matthews-267x352.jpg",
      name: "Chief Daniel Matthew",
      tilte: "Labour Party Chairman U.K. Chapter",
    },
  ];
  return (
    <div>
      <Header />
      <img
        loading="lazy"
        className="w-full mb-10"
        src="https://fastcredit-ng.com/static/media/aboutpictures.22237054203d1eac46b7.png"
        alt=""
      />
      <h2 className="text-2xl lg:text-4xl font-black text-center">
        Meet our team
      </h2>
      <p className='text-center text-gray-500'>Team of winners and leaders</p>
      <section className="flex flex-wrap items-center justify-evenly my-8">
        {data.map((info) => (
          <div
            key={info.id}
            className="w-[300px] m-3 rounded-lg group bg-white shadow-md"
          >
            <img
              loading="lazy"
              className="w-full rounded-t-lg shadow-sm"
              src={info.img}
              alt={info.name}
            />
            <div className="p-4">
              <h2 className="font-semibold text-sm">{info.name}</h2>
              <p className="text-xs ">{info.tilte}</p>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
})
