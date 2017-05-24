// find cycle in directed graph
// [[1,0],[2,0],[3,1],[3,2]]

// graph: { destination: source }
// degree: { source: destination }
const canFinish = (numCourses, prerequisites) => {
  const q = [];
  const graph = [];
  const degree = Array.from({ length: numCourses }, v => 0);

  for (let i = 0; i < numCourses; i++) {
    graph.push([]);
  }

  // build graph
  // build indegree
  for (let i = 0; i < prerequisites.length; i++) {
    degree[prerequisites[i][1]] += 1;
    graph[prerequisites[i][0]].push(prerequisites[i][1]);
  }

  for (let i = 0; i < numCourses; i++) {
    if (degree[i] === 0) {
      q.push(i);
    }
  }

  while (q.length) {
    const course = q.shift();
    for (let i = 0; i < graph[course].length; i++) {
      const pointer = graph[course][i];
      degree[pointer] -= 1;
      if (degree[pointer] === 0) q.push(pointer);
    }
  }
  
  for (let i = 0; i < numCourses; i++) {
		if (degree[i] !== 0) return false;
	}
	return true;
};

// DFS
// const canFinish = (numCourses, prerequisites) => {
//   const graph = [];
//   const visited = Array.from({ length: numCourses }, v => 0);

//   for (let i = 0; i < numCourses; i++) {
//     graph.push([]);
//   }

//   for (let i = 0; i < prerequisites.length; i++) {
//     graph[prerequisites[i][0]].push(prerequisites[i][1]);
//   }

//   const dfs = index => {
//     if (visited[index] === -1) return false;
//     if (visited[index] === 1) return true;
//     visited[index] = -1;
//     for (let j = 0; j < graph[index].length; j++) {
//       if (!dfs(j)) return false;
//     }
//     visited[index] = 1;
//     return true;
//   };

//   for (let i = 0; i < numCourses; i++) {
//     if (!dfs(i)) return false;
//   }

//   return true;
// };