export default [
    {
      _id: "quiz001",
      title: "Q1",
      course: "RS101",
      availableDate: "2024-04-16T08:00:00.000Z",
      dueDate: "2024-04-26T23:59:59.000Z",
      totalPoints: 10,
      isPublished: false,
      questions: [
        {
          _id: "q101",
          questionText: "True",
          options: [
            { text: "True", isCorrect: true },
            { text: "False", isCorrect: false },
          ],
          points: 5,
        },
        {
          _id: "q102",
          questionText: "False",
          options: [
            { text: "True", isCorrect: false },
            { text: "False", isCorrect: true },
          ],
          points: 5,
        },
      ],
    },
    {
        _id: "quiz002",
        title: "Q2",
        course: "RS101",
        availableDate: "2024-04-27T08:00:00.000Z",
        dueDate: "2024-04-28T23:59:59.000Z",
        totalPoints: 10,
        isPublished: false,
        questions: [
          {
            _id: "q201",
            questionText: "True",
            options: [
              { text: "True", isCorrect: true },
              { text: "False", isCorrect: false },
            ],
            points: 5,
          },
          {
            _id: "q202",
            questionText: "False",
            options: [
              { text: "True", isCorrect: false },
              { text: "False", isCorrect: true },
            ],
            points: 5,
          },
        ],
      },
  ];