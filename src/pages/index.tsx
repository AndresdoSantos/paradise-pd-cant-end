import type { NextPage } from 'next'

import { Footer } from '../components/Footer'
import { Modal } from '../components/Modal'

const data = ['andres.dosantosbritoamaral@gmail.com']

const Home: NextPage = () => {
  return (
    <div className="bg-[#141414] min-h-screen pb-12">
      <main className="max-w-[1120px] mx-auto py-10">
        <div className="w-full">
          <strong className="text-4xl text-white">{`Paradise PD can't end`}</strong>
          <div className="h-1 w-20 bg-[#E50914] rounded mt-3" />

          <section className="flex flex-col gap-4 mt-20 text-white">
            <p>
              {`Paradise PD is a Netflix original series...but I don't need to
          explain, if you're here you already know what Paradise PD is.`}
            </p>

            <p>
              The problem is that it only has 3 seasons...what the fuck is this?
            </p>

            <p>{`Let's place an order for the 4th, 5th, 6th...`}</p>

            <Modal />

            <p>Ah... before I forget, the bosses of the series are them</p>

            <div className="grid grid-cols-2 gap-4 w-1/2">
              <div className="p-5 bg-[#292929] rounded">
                <p>{`Waco O'Guin`}</p>
              </div>
              <div className="p-5 bg-[#292929] rounded">
                <p>Roger Black</p>
              </div>
            </div>
          </section>
        </div>

        <strong className="block text-white mt-20 mb-5">Collaborators</strong>

        <div className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item}
              className="bg-[#292929] flex items-center rounded h-20 w-full px-5"
            >
              <p className="text-white">{item}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
