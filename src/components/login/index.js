import Link from 'next/link';
import React from 'react';
import { loginUser } from '../../../lib/auth'
import Router from 'next/router';

class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
        imei: '',
    }

    

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        const { username, password, imei } = this.state;

        e.preventDefault();
        loginUser(username, password, imei);

        Router.push('/');

    }

    render() {
        return (
            <div className="h-screen flex flex-col items-center justify-center ">
                <div class="w-full max-w-xs">
                    <form class="grid bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit} >
                        <img
                            src="/./dummy-logo.png"
                            width="200px"
                            class="place-self-center mb-6"
                        />
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="Enter Username" onChange={this.handleChange}/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Enter Password"  onChange={this.handleChange}/>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="imei">
                                Imei
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="imei"  placeholder="Enter Imei"  onChange={this.handleChange}/>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
} 

export default LoginForm;