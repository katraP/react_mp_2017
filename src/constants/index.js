const categories = [
    {
      id: '1',
      isActive: true,
      isDone: false,
      title: 'Category1',
      subCategories: [],
      tasks: [
        {
          id: '1',
          isDone: false,
          title: 'Task 1',
          description: ''
        },
        {
          id: '2',
          isDone: false,
          title: 'Task 2',
          description: ''
        },
        {
          id: '3',
          isDone: false,
          title: 'Task 3',
          description: ''
        },
        {
          id: '4',
          isDone: false,
          title: 'Task 4',
          description: ''
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
          subCategories: [],
          tasks: [
            {
              id: '1',
              isDone: false,
              title: 'Task 1',
              description: ''
            },
            {
              id: '2',
              isDone: false,
              title: 'Task 2',
              description: ''
            },
            {
              id: '3',
              isDone: false,
              title: 'Task 3',
              description: ''
            },
            {
              id: '4',
              isDone: false,
              title: 'Task 4',
              description: ''
            }
          ]
        },
        {
          id: '2.2',
          isActive: false,
          isDone: false,
          title: 'Category2.2',
          subCategories: [],
          tasks: [
            {
              id: '1',
              isDone: false,
              title: 'Task 1',
              description: ''
            },
            {
              id: '2',
              isDone: false,
              title: 'Task 2',
              description: ''
            }
          ]
        }
      ],
      tasks: [
        {
          id: '1',
          isDone: false,
          title: 'Task 2.1',
          description: ''
        },
        {
          id: '2',
          isDone: false,
          title: 'Task 2.2',
          description: ''
        },
        {
          id: '3',
          isDone: false,
          title: 'Task 2.3',
          description: ''
        },
        {
          id: '4',
          isDone: false,
          title: 'Task 2.4',
          description: ''
        }
      ]
    }
  ];

export default categories;