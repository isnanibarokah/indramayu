import React from "react";

const LeDigInputForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[700px]">
        <h3 className="text-[#01347c] text-lg font-bold mb-4 text-center">
          Silahkan Lengkapi Form Berikut!
        </h3>
        <form className="space-y-4">
          {/* Tanggal Aduan */}
          <div>
            <label
              htmlFor="tanggal"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Aduan <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="tanggal"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              placeholder="Pilih Tanggal Aduan"
              required
            />
          </div>

          {/* Program LE-DIG Input */}
          <div>
            <label
              htmlFor="program"
              className="block text-sm font-medium text-gray-700"
            >
              Program LE-DIG <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <select
                id="program"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              >
                <option value="" disabled selected>
                  Pilih Program LE-DIG
                </option>
                <option value="Internet Desa">Internet Desa</option>
                <option value="Aplikasi Wajib Desa">Aplikasi Wajib Desa</option>
                <option value="Anjungan Desa Mandiri">Anjungan Desa Mandiri</option>
                <option value="Aplikasi Layanan Desa">Aplikasi Layanan Desa</option>
                <option value="Website Desa">Website Desa</option>
                <option value="Kawasan Desa Digital">Kawasan Desa Digital</option>
                <option value="Aplikasi Indramayu.id">Aplikasi Indramayu.id</option>
                <option value="Padi Box">Padi Box</option>
                <option value="AyuTVCC">AyuTVCC</option>
              </select>
            </div>
          </div>

          {/* Jumlah Implementasi Input */}
          <div>
            <label
              htmlFor="jumlah"
              className="block text-sm font-medium text-gray-700"
            >
              Jumlah Implementasi <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="jumlah"
                placeholder="Tulis Jumlah Implementasi"
                min="0"
                className="block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-[#01347c] focus:border-[#01347c] sm:text-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#01347c] text-white font-medium rounded-md shadow-sm hover:bg-[#012f6b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01347c]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeDigInputForm;
