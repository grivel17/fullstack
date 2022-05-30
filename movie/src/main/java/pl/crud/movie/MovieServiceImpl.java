package pl.crud.movie;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieServiceImpl implements MovieService{

    @Autowired
    MovieRepository movieRepository;

    @Override
    public List<Movies> getAll() {
        return (List<Movies>) movieRepository.findAll();
    }

    @Override
    public Movies saveMovie(Movies movies) {
        return movieRepository.save(movies);
    }
}
