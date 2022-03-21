import Head from 'next/head'
import Image from 'next/image'
import {Navbar} from '../components/navbar';

import Layout from '../components/layout'

export default function Home() {
  return (
      <Layout>
    <div>
        <Navbar/>
        <div className="w-full bg-gray-100 p-4 rounded mt-10">
            <h1>Ticket Support CC</h1>
        </div>
        <div className="px-6">
            <div className="flex justify-end">
                <button className="bg-emerald-500 font-blod text-white
                        mt-16              
                        px-6
                        py-4
                        rounded-lg
                        text-sm
                        flex
                    ">
                    Add
                </button>
            </div>
            <table className="mt-8">
                <tr>
                    <th>No</th>
                    <th>No. Laporan</th>
                    <th>Tgl Laporan</th>
                    <th>Jenis</th>
                    <th>Sub Jenis</th>
                    <th>Petugas</th>
                    <th>Permasalahan</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>TS/2/102021/7</td>
                    <td>22 Okt 2021</td>
                    <td>Komunikasi Seluler</td>
                    <td>Pulsa</td>
                    <td>Eko</td>
                    <td>[removed] sadadeda [removed]</td>
                    <td>Wo Baru</td>
                </tr>
            </table>
        </div>
            
    </div>
    </Layout>
  )
}
