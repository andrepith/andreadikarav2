import Image from "next/image";

interface SkillsetInterfaceItem {
  name: string;
  image: string;
  link: string;
}

interface SkillsetInterface {
  skillset: Array<SkillsetInterfaceItem>;
}

const Skillset = ({ skillset }: SkillsetInterface) => {
  return (
    <div className="justify-content-start skillset" id="skillset">
      <div className="container">
        <h2 className="section-title text-center">Featured Skillset.</h2>
        <div className="logo-container mt-4">
          {skillset.map((item, key) => (
            <div className="logo-wrapper" key={key}>
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                className="logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillset;
