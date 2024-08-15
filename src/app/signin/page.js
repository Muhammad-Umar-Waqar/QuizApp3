// // app/signin/page.js

// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-toastify';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();



//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         // Save JWT token to localStorage/session
//         localStorage.setItem('token', result.token);
//         toast.success("User Signed In Successfully!")
//         router.push('/dashboard'); // Redirect to dashboard after successful sign-in
//       } else {
//         setError(result.error);
//       }
//     } catch (err) {
//       console.error('Error signing in:', err);
//       setError('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-4">Sign In</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="w-full px-4 py-2 border rounded"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="w-full px-4 py-2 border rounded"
//           required
//         />
//         <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;





// app/page.js
'use client';
import { Link } from 'next/link';
import "./style.css"
import { useRouter } from "next/navigation";
import { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        // Save JWT token to localStorage/session
        localStorage.setItem('token', result.token);
        router.push('/dashboard'); // Redirect to dashboard after successful sign-in
      } else {
        setError(result.error);
      }
    } catch (err) {
      console.error('Error signing in:', err);
      setError('Something went wrong. Please try again.');
    }
  //   const userLogin = {
  //     email: email, 
  //     password: password,
  //   }
  //   // localStorage.setItem('userLogin', JSON.stringify(userLogin))
  // console.log(userLogin);
  };

  

  function handleSignup() {
    router.push("/signup");
  }
return (
      
        <div className=" main_container flex flex-col items-center justify-center min-h-screen  p-4">
          <h1 className="text-5xl text-center mb-8 text-blue-500 font-bold"  >QUIZ APP</h1>
        
      
         
          {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <input type="email"
              value={email}
               placeholder="Email"
               onChange={(e) => setEmail(e.target.value)}
                required />
              <input type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" required />
              <div className="fb-submit">
                <button type="submit" className="login">Login</button>
                <p>If you don't have acount</p>
              </div>
              <hr />
              <button className="button">
                <a  onClick={handleSignup}>Create new account</a>
              </button>
            </form>
          </div>
       
      
     
    );
  };
  
  export default SignIn;