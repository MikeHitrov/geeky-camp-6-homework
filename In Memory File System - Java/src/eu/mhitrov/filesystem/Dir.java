package eu.mhitrov.filesystem;

import java.util.HashMap;

public class Dir {
    HashMap < String, Dir > dirs = new HashMap < > ();
    HashMap< String, String > files = new HashMap < > ();
}