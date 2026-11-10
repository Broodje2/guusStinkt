import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center gap-8 mt-16 bg-white dark:bg-black sm:items-start">
        <h2 className="text-4xl font-medium">Portfolio Q3 weekplanner</h2>
        <p>Alle to-do's voor je stageportfolio, op volgorde van prioriteit en verdeeld over dinsdag 10 t/m vrijdag 13 november. Je werkt van boven naar beneden. De uren zijn mijn schatting keer de tempofactor, omdat je alles zelf schrijft. Vrijdag is vooral voor polish.</p>
        <div className="flex flex-row gap-4 mt-8 w-full">
          <div className="flex flex-col w-full p-4 rounded-2xl bg-zinc-900 border-x border-x-zinc-400 border-b-zinc-400 border-t-8 border-amber-400">
            <p className="text-zinc-500">P1 eerst</p>
            <p className="font-bold text-2xl">17 u</p>
            <p className="text-zinc-500">0 van 8 taken klaar</p>
            <p className="text-zinc-500">past in de week</p>
          </div>
          <div className="flex flex-col w-full p-4 rounded-2xl bg-zinc-900 border-x border-x-zinc-400 border-b-zinc-400 border-t-8 border-red-400">
            <p className="text-zinc-500">P1 eerst</p>
            <p className="font-bold text-2xl">17 u</p>
            <p className="text-zinc-500">0 van 8 taken klaar</p>
            <p className="text-zinc-500">past in de week</p>
          </div>
          <div className="flex flex-col w-full p-4 rounded-2xl bg-zinc-900 border-x border-x-zinc-400 border-b-zinc-400 border-t-8 border-green-400">
            <p className="text-zinc-500">P1 eerst</p>
            <p className="font-bold text-2xl">17 u</p>
            <p className="text-zinc-500">0 van 8 taken klaar</p>
            <p className="text-zinc-500">past in de week</p>
          </div>
          <div className="flex flex-col w-full p-4 rounded-2xl bg-zinc-900 border-x border-x-zinc-400 border-b-zinc-400 border-t-8 border-blue-400">
            <p className="text-zinc-500">P1 eerst</p>
            <p className="font-bold text-2xl">17 u</p>
            <p className="text-zinc-500">0 van 8 taken klaar</p>
            <p className="text-zinc-500">past in de week</p>
          </div>
        </div>
        <div className="flex flex-col w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-400">
          <div className="grid grid-cols-10 grid-rows-1 gap-4 mb-2">
            <p className="text-zinc-500 text-sm">uren di 10</p>
            <p className="text-zinc-500 text-sm">uren di 10</p>
            <p className="text-zinc-500 text-sm">uren di 10</p>
            <p className="text-zinc-500 text-sm">uren di 10</p>
            <p className="text-zinc-500 text-sm">uren di 10</p>
            <p className="text-zinc-500 text-sm">uren di 10</p>
            <div className="w-[40%]"></div>
          </div>
          <div className="grid grid-cols-10 grid-rows-1 gap-4 items-center">
            <div className="bg-zinc-800 border border-zinc-400 rounded-xl p-4">12</div>
            <div className="bg-zinc-800 border border-zinc-400 rounded-xl p-4">12</div>
            <div className="bg-zinc-800 border border-zinc-400 rounded-xl p-4">12</div>
            <div className="bg-zinc-800 border border-zinc-400 rounded-xl p-4">12</div>
            <div className="bg-zinc-800 border border-zinc-400 rounded-xl p-4">12</div>
            <div className="bg-zinc-800 border border-zinc-400 rounded-xl p-4">12</div>
            <div className="col-span-2 flex flex-row items-center gap-1"><button className="w-4 h-4 bg-white border border-black rounded"></button><p className="col-span-2">Alleen op taken inplannen</p></div>
            <button className="col-span-2 bg-zinc-800 border border-zinc-400 rounded-xl p-4 hover:bg-amber-500">Standaardwaarden</button>
          </div>
        </div>
        <h2 className="text-2xl">Planning per dag</h2>
        <div className="flex flex-row gap-4">
          <div  className="flex flex-col gap-4 w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-400">
            <div className="w-full flex flex-row justify-between items-center">
              <p className="text-xs">Dinsdag</p>
              <p className="text-sm text-zinc-600">10 november</p>
            </div>
            <p className="text-sm text-zinc-600">12 u van 12 u gepland</p>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
          </div>
          <div  className="flex flex-col gap-4 w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-400">
            <div className="w-full flex flex-row justify-between items-center">
              <p className="text-xs">Dinsdag</p>
              <p className="text-sm text-zinc-600">10 november</p>
            </div>
            <p className="text-sm text-zinc-600">12 u van 12 u gepland</p>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
          </div>
          <div  className="flex flex-col gap-4 w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-400">
            <div className="w-full flex flex-row justify-between items-center">
              <p className="text-xs">Dinsdag</p>
              <p className="text-sm text-zinc-600">10 november</p>
            </div>
            <p className="text-sm text-zinc-600">12 u van 12 u gepland</p>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
          </div>
          <div  className="flex flex-col gap-4 w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-400">
            <div className="w-full flex flex-row justify-between items-center">
              <p className="text-xs">Dinsdag</p>
              <p className="text-sm text-zinc-600">10 november</p>
            </div>
            <p className="text-sm text-zinc-600">12 u van 12 u gepland</p>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500 text-xs">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500">p1 eerst Jasper voortgang vragen</p>
            </div>
            <div className="bg-orange-800 p-4 border-zinc-400 border rounded-2xl border-l-8 border-l-orange-300">
              <div className="flex flex-row justify-between items-center gap-4 p-4">
                <p className="font-bold text-xs">Jasper vragen + formulier uploaden</p>
                <p>0,5 u</p>
              </div>
              <p className="text-zinc-500">p1 eerst Jasper voortgang vragen</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
