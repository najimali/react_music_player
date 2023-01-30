import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { mockSongs } from '../redux/services/mockData';

const Discover = () => {
  // const { songs, isFetching, error } = useGetTopChartsQuery();
  // console.log(songs);
  // const data = songs?.tracks || mockSongs;
  const data = mockSongs;
  console.log(data);
  const isFetching = false;
  const error = false;
  if (isFetching) {
    return <Loader title="Loading Songs" />;
  }
  if (error) {
    return <Error />;
  }
  const genreTitle = 'Pop';

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm: flex-row flex-col mt-4 mb-10">
        <h2 className="front-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          name=""
          id=""
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option
              key={genre.value}
              value={genre.value}
            >
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, index) => (
          <SongCard
            key={index}
            song={song}
            i={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
