import SwiperSlider from './SwiperSlider';

const slides = [
    <div className="bg-blue-500 text-white p-4 rounded-md">Slide 1</div>,
    <div className="bg-green-500 text-white p-4 rounded-md">Slide 2</div>,
    <div className="bg-red-500 text-white p-4 rounded-md">Slide 3</div>,
    <div className="bg-yellow-500 text-white p-4 rounded-md">Slide 4</div>,
  ];

const Slider = () => {
  return (
    <div className="app">
      <SwiperSlider>{slides}</SwiperSlider>
    </div>
  );
};

export default Slider;