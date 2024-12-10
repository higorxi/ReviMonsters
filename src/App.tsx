import AppRouter from './routes/router';
import background from './assets/Background/CavernBackground.png'

export default function App() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <AppRouter />
    </div>
  );
}
