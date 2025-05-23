export default function Video1() {
  return (
    <div className="flex items-center justify-center flex-col h-screen text-white">
      <p className="font-bold text-indigo-400 text-2xl mb-2">Бичлэг 1</p>
      {/* <video className="w-full max-w-2xl rounded-lg shadow-lg" controls>
          <source src="/video1.mp4" type="video/mp4" />
        </video> */}
      {/* <div className="relative w-full max-w-2xl mx-auto pb-[56.25%]"> */}
      <iframe
        // className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/G1YEAE8OuVA"
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowFullScreen
        height={500}
        width={1000}
      />
      {/* </div> */}

      <div className="flex items-center mt-4 space-x-4 text-black">
        <div className="rounded-xl p-2 bg-gray-200">
          <p className="font-semibold text-lg">Даалгавар</p>
          <p>1.email, age гараас утга авах</p>
          <p>2.үүсгэсэн харилцагчийн датаг харуулах</p>
        </div>
        <div className="rounded-xl p-2 bg-gray-200">
          <p className="font-semibold text-lg">Жич</p>
          <p>
            github:{" "}
            <a
              href="https://github.com/temujin6/11-back"
              className="text-blue-500"
            >
              https://github.com/temujin6/11-back
            </a>
          </p>
          <p>
            1. http://localhost:8080/createUsers --- харилцагч шинээр үүсгэх
          </p>
          <p>2. http://localhost:8080/users --- харилцагчийн дата авах</p>
        </div>
      </div>
    </div>
  );
}
