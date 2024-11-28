function WelcomeMessage() {
  return (
    <div>
      Welcome to React Lessons
    </div>
  )
}

function LoginMessage() {
  return (
    <div>
      Please login to access React Lessons
    </div>
  )
}

const isLoggedIn = false;

export default function App() {
    return (
      <>
        {
          isLoggedIn
            ? <WelcomeMessage />
            : <LoginMessage />
        }
      </>
    )
}


