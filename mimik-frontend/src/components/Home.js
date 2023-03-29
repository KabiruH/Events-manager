function Home() {
  return <div className="w-3/4 h-3/4 m-auto flex justify-evenly items-center">
    <div className="text-gray-700">
        <h1 className="text-5xl">Welcome to <br/><span className="text-rose-600">MIMIK</span> events</h1>
    <p>There are two major products that come out of Berkeley: LSD and UNIX. We don’t believe this to be a coincidence. (Jeremy S. Anderson)</p>
    </div>
    <div className="flex gap-6">
    <img src="mimik-frontend/src/assets/mimik-logo.png" alt="logo"/>
    <img src="mimik-frontend/src/assets/mimik-logo.png" alt="logo"/>
    <img src="mimik-frontend/src/assets/mimik-logo.png" alt="logo"/>
    </div>
  </div>;
}

export default Home;
