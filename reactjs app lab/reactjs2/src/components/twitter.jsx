import React from 'react';

function Twitter() {
  const [name, setName] = React.useState('jeresig');
  const [profile, setProfile] = React.useState(null);

  const check = async () => {
    const response = await fetch("https://peerreach.p.rapidapi.com/user/lookup.json?screen_name=" + name, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "peerreach.p.rapidapi.com",
        "x-rapidapi-key": "---Insert-API-key-here---"
      }
    });
    const body = await response.json();
    console.log(body);
    setProfile(body);
  };

  return (
    <div className="Twitter">

      <section>
        <h2>Username</h2>
        <span>
          @ <input
            autoFocus
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </span>
        <button onClick={check}>Check</button>
      </section>

      {profile && <>

        <section>
          <h2>Profiles</h2>
          <ul>
            {profile.profiles?.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Peer Groups</h2>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Group</th>
              </tr>
            </thead>
            <tbody>
              {profile.peergroups?.map(group => (
                <tr key={group.topic}>
                  <td>#{group.rank}</td>
                  <td>{group.topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Subjects</h2>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Assigned</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {profile.subjects?.map(subject => (
                <tr key={subject.name}>
                  <td>{subject.name}</td>
                  <td>{subject.assign_date.split('-')[0]}</td>
                  <td>{subject.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

      </>}
    </div>
  );
}

export default Twitter;