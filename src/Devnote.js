import React from 'react';
const Devnote = () => {
  return (
    <section className='devNote'>
      <p>
        If you're trying to ping the serverless functions from your local
        development environment don't make sure you have:
      </p>
      <ul>
        <li>
          Started the Zeit dev server by running <code>now dev</code> from the
          command line
        </li>
        <li>
          Aimed your broswer to localhost:3000 (not :54648 or any other port
          number).
        </li>
      </ul>
    </section>
  );
};

export default Devnote;
