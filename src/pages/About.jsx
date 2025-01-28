import { useState } from "react";
import { motion } from "framer-motion";
import { animationContainer, animationContainerStory, fadeDownVariant, fadeLeftVariant, fadeRightVariant, fadeVariant,} from "../animations/animationUtils";

function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const handlePopup = () => {
    setSelectedMember(null);
  };

  return (
    <section className="bg-blue-50 min-h-screen">
      <motion.main 
      initial="hidden"
      animate="visible"
      variants={animationContainer}
      className="max-w-6xl mx-auto px-4 py-8">
        <motion.section
        variants={fadeDownVariant}
        className="text-center mb-12">
          {/* Chi siamo */}
          <h2 className="text-3xl font-bold mb-4">About the Team</h2>
          <p className="text-gray-700 mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aliquam dolorum ipsum esse voluptatibus dolorem iusto similique
            tenetur beatae, dignissimos doloribus labore? Quidem quasi fugit
            nostrum, alias exercitationem blanditiis maxime?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Repudiandae deserunt impedit
            dolore hic, voluptates, delectus expedita voluptatum iusto ad quis
            labore officiis ab, distinctio nesciunt veritatis eum quaerat.
            Necessitatibus, voluptatum!
          </p>
        </motion.section>
        {/* la nostra storia */}
        <motion.section variants={animationContainerStory} className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <motion.div variants={fadeRightVariant} className="flex-1 text-gray-700">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum autem
              earum harum rem necessitatibus asperiores debitis soluta neque,
              itaque totam tempora, facere cumque omnis excepturi? Ratione
              asperiores eaque dignissimos ea?
            </p>
          </motion.div>
          <motion.div variants={fadeLeftVariant} className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1622675205169-901710ac8643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Library"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.section>
        {/* membri del team */}
        <section className="text-center">
          <motion.h3 variants={fadeVariant} className="text-2xl font-bold mb-8">Team</motion.h3>
          <div className="grid grid-cols-1 gap-4">
            {/* poi prenderemo questi dati dal db, forse */}
            {[
              {
                name: "Simone Fratini",
                role: "Web Developer",
                img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                email: "SimoneFratini@gmail.com",
                phone: "333 333 3333",
                github: "https://github.com/Simone-Fratini",
              },
              {
                name: "Ajhay Herrera",
                role: "Web Developer",
                img: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                email: "AJ@gmail.com",
                phone: "343 345 3343",
                github: "https://github.com/Aj-Herrera-99",
              },
              {
                name: "Andy Simota",
                role: "Web Developer",
                img: "https://images.unsplash.com/photo-1503001358144-8d7f2c1db9f5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                email: "Andy@gmail.com",
                phone: "145 345 1343",
                github: "https://github.com/AndySMT",
              },
              {
                name: "Arber Beshaj",
                role: "Web Developer",
                img: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                email: "ArberBeshaj@gmail.com",
                phone: "945 945 3443",
                github: "https://github.com/Abraxas-7",
              },
              {
                name: "Andrea Boato",
                role: "Web Developer",
                img: "https://images.unsplash.com/photo-1495638488670-437e54b3bab4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                email: "Andrea@gmail.com",
                phone: "344 345 1543",
                github: "https://github.com/AndreaBoato",
              },
            ].map((member, index) => (
              <motion.div
                variants={fadeLeftVariant}
                key={index}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h4 className="font-semibold text-lg">{member.name}</h4>
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 rounded"
                    onClick={() => setSelectedMember(member)}
                  >
                    Contattami
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* popup  */}
        <section>
          {selectedMember && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
              <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1  }}
              className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="font-semibold text-lg mb-4 text-center text-sky-500">
                  {selectedMember.name}
                </h2>
                <img
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  className="mb-4 w-full h-44 object-cover"
                />
                <p>Role: {selectedMember.role}</p>
                <p>Email: {selectedMember.email}</p>
                <p>Phone: {selectedMember.phone}</p>
                <p>
                  Github:{" "}
                  <a href={selectedMember.github} target="_blank">
                    Visita il profilo
                  </a>
                </p>
                <button
                  onClick={handlePopup}
                  className="mt-4 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded "
                >
                  Chiudi
                </button>
              </motion.div>
            </div>
          )}
        </section>
      </motion.main>
    </section>
  );
}

export default About;
