import "./App.css";
import Card, { CardProps } from "./components/Card";

function App() {
  const data: CardProps[] = [
    {
      title: 'Kopi Gayo',
      imgSource: 'https://2.bp.blogspot.com/-OprpEnWihmM/UQT80R4TgkI/AAAAAAAACGU/lJqT7lQSCas/s1600/Kopi+2.jpg',
      desc: 'Kopi gayo adalah kopi dari Aceh Tengah'
    },
    {
      title: 'Kopi Mandalika',
      imgSource: 'https://2.bp.blogspot.com/-sXo6H5z-Z-4/V3ZBPdxbCOI/AAAAAAAAPbs/Bv7EWH4kvWIKMv5Rn9uWUIlL-uUQgc_BACLcB/s1600/Kopi.png',
      desc: 'Kopi gayo adalah kopi dari Mandalika'
    },
    {
      title: 'Kopi Arabica',
      imgSource: 'https://2.bp.blogspot.com/-OprpEnWihmM/UQT80R4TgkI/AAAAAAAACGU/lJqT7lQSCas/s1600/Kopi+2.jpg',
      desc: 'Kopi gayo adalah kopi dari Sumatra'
    },
  ]
  
  return (
    <div className="flex items-center justify-center p-10 bg-slate-400">
      {
        data.map((value) => (
          <Card title={value.title} desc={value.desc} imgSource={value.imgSource} />
        ))
      }
    </div>
  );
}

export default App;
