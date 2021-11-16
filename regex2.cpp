#include <iostream>

using namespace std;
int F[2002][2002];

int matching(string s, string p)
{
  s = " " + s;
  p = " " + p;
  for (int j = 1; j < p.size(); j++)
  {
    if (p[j] != '*')
      break;
    for (int i = 0; i < s.size(); i++)
      F[i][j] = 1;
  }

  F[0][0] = 1;
  for (int i = 1; i < s.size(); i++)
  {
    for (int j = 1; j < p.size(); j++)
    {
      if (p[j] == '*')
      {
        F[i][j] |= F[i][j - 1];
        F[i][j] |= F[i - 1][j];
        F[i][j] |= F[i - 1][j - 1];
      }
      else if (p[j] == '?' || p[j] == s[i])
        F[i][j] |= F[i - 1][j - 1];
    }
  }
  return F[s.size() - 1][p.size() - 1];
}
int regex()
{
  string s = "abab";
  string p = "*?*ab";
  int isMatching = matching(s, p);

  cout << isMatching << endl;

  return 0;
}