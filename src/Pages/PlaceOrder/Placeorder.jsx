import React from 'react'

const Placeorder = () => {
  return (
    <div class="">
    <div class="w-full max-w-3xl mx-auto pt-14 px-2 md:px-1">
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>

            <div class="mb-6">
                <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Shipping Address</h2>
                <div class="mt-4">
                    <label for="address" class="block text-gray-700 dark:text-white mb-1">Address Line 1</label>
                    <input type="text" id="address" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                </div>


                <div class="mt-4">
                    <label for="address" class="block text-gray-700 dark:text-white mb-1">Address Line 2</label>
                    <input type="text" id="address" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                </div>

                <div class="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label for="city" class="block text-gray-700 dark:text-white mb-1">City</label>
                        <input type="text" id="city" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                    </div>
                    <div>
                        <label for="country" class="block text-gray-700 dark:text-white mb-1">Country</label>
                        <input type="text" id="country" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label for="state" class="block text-gray-700 dark:text-white mb-1">State</label>
                        <input type="text" id="state" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                    </div>
                    <div>
                        <label for="zip" class="block text-gray-700 dark:text-white mb-1">ZIP Code</label>
                        <input type="text" id="zip" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                    </div>
                </div>
            </div>

            {/* <div class="mt-8 flex justify-end">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-700">Place Order</button>
            </div> */}
        </div>
    </div>
</div>

  )
}

export default Placeorder