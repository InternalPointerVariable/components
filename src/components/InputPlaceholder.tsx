const LabelName = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 w-full max-w-xl mx-auto">
      {/* Background Element */}
      <div className="flex-shrink-0 md:mr-4 mb-2 md:mb-0">
        <div className="bg-gray-200 w-12 h-12 rounded-full"></div>
      </div>
      {/* Placeholder with icon and text */}
      <div className="flex items-center">
        <img
          className="w-6 h-6 object-contain mr-2"
          alt="Profile icon"
          src="Iconly/Light-Outline/Profile.png"
        />
        <div className="text-lg text-gray-800">First Name</div>
      </div>
    </div>
  );
};

export default LabelName;
