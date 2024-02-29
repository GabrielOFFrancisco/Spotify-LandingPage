import PropTypes from 'prop-types';

export function ArtistCard({ icon, title }) {
  return (
    <button className='flex flex-col w-56 h-72 bg-zinc-800 rounded-md hover:bg-zinc-700'>
      <img
        src={icon}
        className='w-48 mt-2 rounded-full self-center shadow-zinc-900 shadow-xl'
      />
      <h2 className='text-white text-left ml-4 mt-3 text-lg font-semibold'>
        {title}
      </h2>
      <h3 className='text-zinc-500 text-left ml-4 text-sm font-medium'>
        Artist
      </h3>
    </button>
  );
}

ArtistCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
