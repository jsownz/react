var notepad = {
  notes: [
    {
      id: 1,
      content: "Hello, world!\nBoring.\nBoring.\nBoring."
    },
    {
      id: 2,
      content: "React is awesome.\nSeriously, it's the greatest."
    },
    {
      id: 3,
      content: "Robots are pretty cool.\nRobots are awesome, until they take over."
    },
    {
      id: 4,
      content: "Monkeys.\nWho doesn't love monkeys?"
    }
  ]
};

var NoteSummary = React.createClass({
  render: function () {
    var note = this.props.note;
    var title = note.content.substring(0,
      note.content.indexOf('\n')
    );
    title = title || note.content;

    return (
      <div className="note-summary">{title}</div>
    );
  }
});

var NotesList = React.createClass({
  render: function () {
    var notes = this.props.notepad.notes;

    return (
      <div className="note-list">
        {
          notes.map(function (note) {
            return (
              <NoteSummary key={note.id} note={note}/>
            );
          })
        }
      </div>
    );
  }
});

React.render(
  <NotesList notepad={notepad}/>,
  document.body
);