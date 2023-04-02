import EventItem from "./eventItem";

function EventsHome() {
  return (
    <div className="w-full bg-gray-100 p-4 flex flex-col gap-4 items-center">
      <div className="flex gap-2 text-4xl items-center py-5">
        <div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center">
          <i className="fa-solid fa-heart"></i>
        </div>
        <h1 className="text-gray-700 border-b-2 border-rose-600 font-bold">
          UPCOMING POPULAR EVENTS
        </h1>
      </div>
      <div className="flex w-3/5 justify-evenly flex-wrap items-center m-auto gap-4">
        {Array(6)
          .fill(0)
          .map((e) => (
            <EventItem key={Math.random()} />
          ))}
      </div>
      <button className="bg-rose-600 rounded-lg w-48 p-2 text-white hover:opacity-80">
        <i className="fa-solid fa-calendar-days mr-2"></i>See all Events
        <i className="fa-solid fa-arrow-right ml-1"></i>
      </button>
    </div>
  );
}

export default EventsHome;
