function EventsHome(){
    function Card(){
        return <div className="flex justify-center p-3 hover:scale-110 ease-in-out duration-300 ">
  <div
    className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 w-72">
      <img
        className="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
        alt="" />
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
    </div>
  </div>
</div>

    }
    return(
        <div className="w-full bg-gray-100 p-4 flex flex-col gap-4 items-center">
          <div className="flex gap-2 text-4xl items-center py-5"><div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center"><i className="fa-solid fa-heart"></i></div><h1 className="text-gray-700 border-b-2 border-rose-600 font-bold">UPCOMING POPULAR EVENTS</h1>
          </div>
            <div className="flex w-3/5 justify-evenly flex-wrap items-center m-auto">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <button className="bg-rose-600 rounded-lg w-48 p-2 text-white hover:opacity-80"><i className="fa-solid fa-calendar-days mr-2"></i>See all Events<i className="fa-solid fa-arrow-right ml-1"></i></button>
        </div>
    )
}

export default EventsHome