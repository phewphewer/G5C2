const RightSidebar = () => {
  return (
    <aside className="w-full md:w-1/4 bg-[#0C172E] p-4 shadow-lg rounded-xl text-white">
      <div className="space-y-4">
        <StatCard title="NO OF POSTS" count={120} />
        <StatCard title="NO OF LIKED POSTS" count={85} />
        <StatCard title="NO OF COMMENTS" count={230} />
      </div>
    </aside>
  );
};

export const LeftSidebar = () => {
  return (
      <div className="space-y-4 mt-5">
        <StatCard title="NO OF POSTS" count={120} />
        <StatCard title="NO OF LIKED POSTS" count={85} />
        <StatCard title="NO OF COMMENTS" count={230} />
      </div>
  );
};

const StatCard = ({ title, count }) => {
  return (
    <div className="p-4 bg-[#283D55] rounded-lg text-center shadow-md">
      <h3 className="text-[#E4D8BE] font-semibold text-sm">{title}</h3>
      <p className="text-lg font-bold text-[#D09966]">{count}</p>
    </div>
  );
};

export default RightSidebar;
