import React from 'react'

const Payment = () => {
  return (
    <div className='w-full bg-slate-50 min-h-screen'>
      <div class="w-full max-w-lg mx-auto  py-8 px-2 md:px-1">
        <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-lg font-medium mb-6">Payment Information</h2>
            <div>
              <img src="https://png.pngtree.com/png-clipart/20231124/original/pngtree-blue-credit-card-vector-photo-png-image_13697770.png"
              className='-mt-14 -mb-10 object-cover' alt="" />
            </div>
            <form>
                <div class="grid grid-cols-2 gap-6">
                    <div class="col-span-2 sm:col-span-1">
                        <label for="card-number" class="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="expiration-date" class="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                        <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="cvv" class="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input type="text" name="cvv" id="cvv" placeholder="000" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="card-holder" class="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
                        <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
                    </div>
                </div>
                <div class="mt-8">
                    <button  class="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none">Pay</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Payment