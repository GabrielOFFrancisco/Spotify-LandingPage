import PropTypes from 'prop-types';

export function Usercards({ icon, title }) {
  return (
    <button className='flex gap-6 w-96 h-24 items-center bg-zinc-800 rounded-sm hover:bg-zinc-700'>
      <img src={icon} className='w-24 rounded-s-sm' />
      <h2 className='text-white text-lg font-semibold'>{title}</h2>
    </button>
  );
}

Usercards.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
