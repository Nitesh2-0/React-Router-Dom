import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getimages = async (page) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
      setImages(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getimages(page);
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-700 text-gray-100 flex flex-col items-center pt-16">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className="w-full flex flex-wrap gap-10 justify-center">
          {images.map((img) => (
            <div key={img.id} className="w-96 h-auto bg-white p-4 rounded shadow-lg">
              <img src={img.download_url} alt="" className="w-full h-64 object-cover rounded" />
              <p className="text-gray-700 mt-2">{img.author}</p>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-8">
        <button
          className={`px-4 py-2 rounded ${page === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-700 hover:bg-red-800'} text-white`}
          onClick={() => page > 1 && setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <p className="px-4 py-2 mx-2 rounded bg-gray-900">{page}</p>
        <button
          className="px-4 py-2 rounded bg-indigo-700 hover:bg-indigo-800 text-white"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
