package pl.crud.movie;

import java.util.List;

public interface MovieService {

    List<Movies> getAll();

    public Movies saveMovie(Movies movies);

}
