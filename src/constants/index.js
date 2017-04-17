const categories = [
    {
      id: '1',
      isActive: true,
      isDone: false,
      title: 'Category1',
      subCategories: [],
      tasks: [
        {
          isDone: false,
          title: 'Task 1'
        },
        {
          isDone: false,
          title: 'Task 2'
        },
        {
          isDone: false,
          title: 'Task 3'
        },
        {
          isDone: false,
          title: 'Task 4'
        }
      ]
    },
    {
      id: '2',
      isActive: false,
      isDone: false,
      title: 'Category2',
      subCategories: [
        {
          id: '2.1',
          isActive: false,
          isDone: false,
          title: 'Category2.1',
          tasks: [
            {
              isDone: false,
              title: 'Task 1'
            },
            {
              isDone: false,
              title: 'Task 2'
            },
            {
              isDone: false,
              title: 'Task 3'
            },
            {
              isDone: false,
              title: 'Task 4'
            }
          ]
        },
        {
          id: '2.2',
          isActive: false,
          isDone: false,
          title: 'Category2.2',
          tasks: [
            {
              isDone: false,
              title: 'Task 1'
            },
            {
              isDone: false,
              title: 'Task 2'
            }
          ]
        }
      ],
      tasks: [
        {
          isDone: false,
          title: 'Task 2.1'
        },
        {
          isDone: false,
          title: 'Task 2.2'
        },
        {
          isDone: false,
          title: 'Task 2.3'
        },
        {
          isDone: false,
          title: 'Task 2.4'
        }
      ]
    }
  ];

export default categories;