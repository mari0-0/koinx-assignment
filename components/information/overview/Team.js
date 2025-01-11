export default function Team() {
  const teamMembers = [
    {
      name: "John Smith",
      designation: "Designation here",
      image: "/team/team-member-1.png",
      bio: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      name: "Elina Williams",
      designation: "Designation here",
      image: "/team/team-member-2.png",
      bio: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      name: "John Smith",
      designation: "Designation here",
      image: "/team/team-member-3.png",
      bio: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
  ];

  return (
    <section className="w-full p-3 pb-3 lg:p-6 bg-white rounded-md text-sm lg:text-[16px]">
      <h2 className="text-2xl font-semibold mb-4">Team</h2>
      <p className="mb-8 text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      <div className="space-y-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-secondary-400 p-6 rounded-lg flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-1/6 flex flex-col items-center">
              <div className="w-36 h-36">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <h3 className="mt-4 font-medium text-lg">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.designation}</p>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-[16px]">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
