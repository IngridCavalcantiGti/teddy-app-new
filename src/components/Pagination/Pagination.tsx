const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 pb-6 font-bold">
      <button>1</button>
      <span>...</span>
      <button>3</button>
      <button className="bg-orange-500 text-white px-3 py-1 rounded">4</button>
      <button>5</button>
      <span>...</span>
      <button>12</button>
    </div>
  );
};

export default Pagination;
