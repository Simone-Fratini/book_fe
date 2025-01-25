function About() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="text-center mb-12">
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
        </section>
        {/* la nostra storia */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="flex-1 text-gray-700">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum autem
              earum harum rem necessitatibus asperiores debitis soluta neque,
              itaque totam tempora, facere cumque omnis excepturi? Ratione
              asperiores eaque dignissimos ea?
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1622675205169-901710ac8643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Library"
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>
        {/* membri del team */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-8">Team</h3>
          <div className="grid grid-cols-1 gap-4">
            {/* poi prenderemo questi dati dal db, forse */}
            {[
              {
                name: "Simone Fratini",
                role: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Ajhay Herrera",
                role: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
                img: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Andy Simota",
                role: "ccccccccccccccccccccccccccccccccccc",
                img: "https://images.unsplash.com/photo-1503001358144-8d7f2c1db9f5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Arber Beshaj",
                role: "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
                img: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Andrea Boato",
                role: "arrivato qui ho capito che sto sbagliando qualcosa..... mannaiaaaaaaaa che palle, mo come risolvo ? ",
                img: "https://images.unsplash.com/photo-1495638488670-437e54b3bab4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((member, index) => (
              <div
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
                  <button className="bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 rounded">
                    Contattami
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
