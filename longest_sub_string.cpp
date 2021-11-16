#include <iostream>
#include <stdio.h>
#include <cstring>

using namespace std;

int longest_substring(string s)
{
  int frequency[256];
  memset(frequency, 0, sizeof(frequency));
  int maxx = 0;
  int j = 0;
  for (int i = 0; i < s.size(); i++)
  {
    if (i == 0)
      frequency[s[i]]++;
    while (1)
    {
      if (frequency[s[j]] <= 1)
        maxx = max(maxx, j - i + 1);
      else
        break;
      if (j >= s.size() - 1)
        break;
      j++;
      frequency[s[j]]++;
    }
    frequency[s[i]]--;
  }
  return maxx;
}
int longest_substring()
{
  string s = "a1234asdf";
  int maxx = longest_substring(s);
  cout << maxx;

  return 0;
}