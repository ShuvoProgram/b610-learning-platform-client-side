import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const CheckOut = () => {
    const checkoutHandle = () => {
        swal({
            title: "Purchase Successfully!",
            text: "Happy Learning journey!",
            icon: "success",
            button: "Ok!",
        });
    }
    return (
        <div className='flex justify-center my-10'>
            <div className="flex flex-col max-w-md  p-6 space-y-4 divide-y sm:w-96 sm:p-10 divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div>
                    <div className="flex flex-col max-w-md p-6 space-y-2 border border-2 divide-y sm:w-96 sm:p-10 divide-gray-700 dark:bg-white dark:text-gray-900">
                        <h2 className="text-2xl font-semibold">Course CheckOut</h2>
                        <ul className="flex flex-col pt-4 space-y-2">
                            <li className="flex items-start justify-between">
                                <h3>Large soda</h3>
                                <div className="text-right">
                                    <span className="block">$4.00</span>
                                </div>
                            </li>
                        </ul>
                        <div className="pt-4 space-y-2">
                            <div className="space-y-6">
                                <div className="flex justify-between">
                                    <span>Course Fee</span>
                                    <span className="font-semibold">$24</span>
                                </div>
                                <button type="button" className="w-full py-2 font-semibold border rounded dark:bg-blue-700 dark:text-gray-900 dark:border-violet-400">
                                    <Link onClick={checkoutHandle} to='/checkout'>
                                        Go to checkout
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;